import "./Information.scss";

import Tooltip from "rc-tooltip";

interface InformationProps {
    content: string
}

export function Information ({ content }: InformationProps) {
    return (
        <Tooltip placement="bottom" trigger={["click"]} overlay={<span>{content}</span>}>
            <svg className="information" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.15385 7.14286V14H9.84615V7.14286H8.15385Z" fill="#A7A7A7"/>
                <path d="M8.27692 5.61429C8.4718 5.79524 8.71282 5.88571 9 5.88571C9.29744 5.88571 9.53846 5.79524 9.72308 5.61429C9.90769 5.43333 10 5.20952 10 4.94286C10 4.67619 9.90769 4.45238 9.72308 4.27143C9.53846 4.09048 9.29744 4 9 4C8.71282 4 8.4718 4.09048 8.27692 4.27143C8.09231 4.45238 8 4.67619 8 4.94286C8 5.20952 8.09231 5.43333 8.27692 5.61429Z" fill="#A7A7A7"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" fill="#A7A7A7"/>
            </svg>
        </Tooltip>
    );
}
