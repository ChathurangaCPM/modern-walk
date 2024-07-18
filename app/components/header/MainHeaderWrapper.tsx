import Link from 'next/link';
import { MainHeaderWrapperInterface } from '../../types/types'

const MainHeaderWrapper: React.FC<MainHeaderWrapperInterface> = ({
    title,
    logo,
    link
}) => {
    return (
        <div className="p-4 border-b-2 flex items-center justify-center">
            <Link href={link}>
                <h1 className="text-3xl font-bold">{title}</h1>
            </Link>
        </div>
    )
}

export default MainHeaderWrapper;