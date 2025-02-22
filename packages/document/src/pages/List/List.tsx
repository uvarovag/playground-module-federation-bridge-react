import { Link } from 'react-router'

import { useBerriesQuery } from 'entities/berry'

export const List = () => {
    const { data } = useBerriesQuery('')
    return (
        <>
            <h2>document list page</h2>
            <ul>
                {data?.results.map(({ name }) => (
                    <li key={name}>
                        <Link to={`/${name}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
