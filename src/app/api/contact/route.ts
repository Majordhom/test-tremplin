// import the Request and Response classes

import { NextResponse, NextRequest } from 'next/server'

// import mysql2/promise for mysql connectivity

import mysql, { QueryResult, ResultSetHeader } from 'mysql2/promise'
import { GetDBSettings } from '@/utils/database/settings'
import { ContactFormValues } from '@/types/form';


// 1. populate the connection parameters

const connectionParams = GetDBSettings();

// define and export the GET handler function

export async function GET() {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const get_exp_query = 'SELECT * FROM contact';
        const [results] = await connection.execute(get_exp_query);
        connection.end();   

        // return the results as a JSON API response
        return NextResponse.json(results)
    } 
    catch (err) {

        const response = {
            error: (err as Error).message,
            returnedStatus: 200,
        }

        return NextResponse.json(response, { status: 200 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: ContactFormValues = await req.json()
    
        const {
          gender,
          name,
          lastName,
          email,
          phone,
          reason,
          message,
          availabilities, // array of time slots
        } = body;
    
        const connection = await mysql.createConnection(connectionParams);

        const [rows] = await connection.execute(
            `SELECT * FROM contact WHERE gender = ? AND name = ? AND lastName = ? AND email = ? AND phone = ? AND reason = ? AND message = ?`,
            [gender, name, lastName, email, phone, reason, message]
        );
          
          if ((rows as QueryResult[]).length > 0) {
            return NextResponse.json({ message: 'Duplicate entry' }, { status: 409 })
          }
    
        // 1. Insert into contact
        const [contactResult] = await connection.execute(
          `INSERT INTO contact (gender, name, lastName, email, phone, reason, message)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [gender, name, lastName, email, phone, reason, message]
        )
    
        const contactId = (contactResult as ResultSetHeader).insertId
    
        // 2. Insert into availability
        if (Array.isArray(availabilities)) {
          for (const availability of availabilities) {
            const slot = availability.day + " à " + availability.time;
            await connection.execute(
              `INSERT INTO availability (contact_id, slot)
               VALUES (?, ?)`,
              [contactId, slot]
            )
          }
        }
    
        await connection.end();
    
        return NextResponse.json({ success: true, contactId })
    } 
    catch (err) {
        console.error('DB error:', err)
        return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 })
    }
}