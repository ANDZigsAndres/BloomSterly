
export function Header () {
    return (
        <nav className="flex bg-dark_theme h-16 justify-between items-center p-4 shadow-md shadow-purple-900">
            <img src="" alt="logo_bloomsterly"  className=" text-white bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg"/>
            <div className="flex gap-4">
                <a href="#" className="font-title italic text-white text-lg bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg">Nosotros</a>
                <a href="#" className="font-title italic text-white text-lg bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg">Servicios</a>
                <a href="#" className="font-title italic text-white text-lg bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg">Pedidos</a>
            </div>
            <h3 className="font-title italic text-white text-lg bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg">Iniciar sesion</h3>
        </nav>
    )
}