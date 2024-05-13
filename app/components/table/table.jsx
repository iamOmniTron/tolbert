

/**
 * 
 * 
 * cols = [
 * {
 * title,
 * key,
 * dataIndex,
 * render
 * }]
 */




export default function Table({cols=[],data=[]}){

    return(
        <>
            <div className="my-2 bg-white">
                <table>
                    <thead>
                        <tr className="border-l-0 border border-r-0 border-2">
                            {
                                cols.map((col,idx)=>(
                                    <td key={col.key??idx}>{col.title}</td>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d,idx)=>{
                                const indices = cols.map(c=>({index:c.dataIndex,renderer:c.render??null}));
                                console.log(indices)
                                return (
                                    <tr key={idx}>
                                        {
                                            indices.map((i)=>(
                                                <td key={i.index}>{i.renderer !== null ? i.renderer(d[i.index],d,idx):d[i.index]}</td>
                                            ))
                                        }
                                    </tr>
                                )
                                 
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}