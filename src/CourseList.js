export default function CourseList({list, addtoSP}) {
    return (
        <div style={{height:'50%'}}>

        <div className="container-fluid w-50 p-3 mt-5">

            <div className="list-group">
                {list.map((item, index)=>(

                    <div className='card w100' key={index}>
                    <div className="card-header">{item.code}</div>
                    <a href="/d" className="card-body text-dark bg-light list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="card-title">{item.name}</h5>
                            <small>{item.totalEnrolled}/{item.capacity}</small>
                        </div>
                        <p className="card-text">{item.desc}</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </a>
                    </div>

                ))}

            </div>


        </div>
        
        </div>
    ); 
}