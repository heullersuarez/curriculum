export default function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    return(
        <div 
            className="h-12 bg-dark text-center text-light 
            flex items-center justify-center font-bold text-sm">
            Copyright © {year} - All right reserved by Héuller
        </div>
    );
}