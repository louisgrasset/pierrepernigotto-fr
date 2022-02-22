import './Header.scss';

interface HeaderProps {
    content: string
    detail?: string
}

export function Header ({ content, detail }: HeaderProps) {
    return (
        <div className="header">
            <h3 className="header-title">
                {content}<span>.</span>
            </h3>
            {
                detail && (
                    <p className="header-detail">{detail}</p>
                )
            }
        </div>
    )
}