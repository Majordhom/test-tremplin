

export default function Button({id, bgColor, title, disabled = false, onClick} : {id:string, bgColor:string, title:string, disabled?:boolean, onClick:()=>void}) {
    return (
        <button id={id} className={`h-full w-full text-center rounded-3xl text-white text-xl ${bgColor} ${!disabled && 'cursor-pointer active:border-gray-500'} border-2 border-transparent leading-none`} disabled={disabled} onClick={onClick}>{title}</button>
    );
}