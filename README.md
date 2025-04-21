# Test web Majordhom

## Pré-requis

git, docker, et un IDE

## Démarrer

Cloner le repo github
> git clone https://github.com/Majordhom/test-php.git

Lancer la stack LAMP
> docker compose up -d

Apache est ouvert sur le port :80 (http://localhost:80).\
Phpmyadmin est ouvert sur le port :8080 (http://localhost:8080)\
Mysql est ouvert sur :3306\
\
Utilisateur et mdp mysql: `root` et `verysecurepassword`

## Exercice

*Pas de limite de temps, vous pourrez terminer l'exercice chez vous si cela vous semble pertinent.*

![alt text](./maquette.png)

Vous devez intégrer cette maquette au site web de l'agence, enregistrez les données du formulaire dans la base de
données.
Nous voulons voir votre façon d'intégrer une maquette de manière *responsive*, comment vous organisez votre code (split des fichiers, commentaires, balises html, écriture des fonctions ...), et
comment vous
gérez la sécurité de celui-ci.

Le but n'est pas forcement de terminer la maquette et de tout intégrer, mais de montrer ce que vous savez faire:
connaissance d'un framework
(SASS, React, Angular, Typescript, Laravel, Symfony ...) ou autres outils (Google ReCaptcha), design pattern, etc.

Ne vous inquiètez ne vous jugerons pas uniquement sur ce test, vous pourrez aussi nous faire parvenir par exemple le
code source de vos projets d'études ou projets perso.

Bonne chance !



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
