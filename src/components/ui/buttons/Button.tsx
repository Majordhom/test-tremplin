

export default function Button({id, bgColor, title, onClick} : {id:string, bgColor:string, title:string, onClick:()=>void}) {
    return (
        <button id={id} className={`h-full w-full text-center rounded-3xl text-white text-xl ${bgColor} cursor-pointer border-2 border-transparent active:border-gray-500`} onClick={onClick}>{title}</button>
    );
}