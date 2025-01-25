import { Link } from 'react-router'

type TLinkButton = {
    label: string,
    fullWidth: boolean,
    link: string,
}
const LinkButton = ({ label, fullWidth, link }: TLinkButton) => {
    return (
        <Link to={link}
            className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-primary hover:border-#2FBEEF duration-300 transition-all py-3 px-4 inline-block
   ${fullWidth ? 'w-full' : 'w-auto'} mt-2 px-16`}>
            {label}
        </Link>
    )
}

export default LinkButton
