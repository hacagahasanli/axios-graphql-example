const Episodes = ({ episodes, style }) => {
    return (
        <>
            <div {...{ style }}>
                <h2 style={{ textAlign: 'center' }}>Episodes</h2>
                {
                    episodes?.map(({
                        id,
                        name,
                        air_date,
                        episode,
                        created
                    }) => {
                        return <ul key={id}>
                            <li>{name}</li>
                            <li>{air_date}</li>
                            <li>{episode}</li>
                            <li>{created}</li>
                        </ul>
                    })
                }
            </div>
        </>
    );
}

export default Episodes;
