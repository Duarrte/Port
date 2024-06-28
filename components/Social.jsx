import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"; // Verifique se o pacote react-icons está instalado corretamente

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Duarrte' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com/in/duarrte' },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
