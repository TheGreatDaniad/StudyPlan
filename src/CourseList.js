import { addItemSP } from './constants/global';

export default function CourseList({list}) {
    return (
        <div style={{height:'50%'}}>

        <div className="container-fluid w-50 p-3 mt-5">

            <div className="list-group">
                {list.map((item, index)=>(

                    <div className='card w100' key={index}>
                    <div className="card-header">{item.code}
                    <button type="button" className="btn btn-primary" onClick={()=>addItemSP(item)}>Add To Plan</button>
                    </div>
                    <a href="/d" className="card-body text-dark bg-light list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="card-title">{item.name}</h5>
                            <small>{item.totalEnrolled>0 ? item.totalEnrolled : "-"}/{item.capacity>0 ? item.capacity : "-"}</small>
                            <small>Credits:{item.credits}</small>
                        </div>
                        <h4>Description: </h4>
                        <span className="card-text">
                            This course is incompatible with: {item.incompat ? item.incompat : "None"}
                            <br/>
                            Preparatory Course: {item.prep ? item.prep : "None"}

                        </span>
                    </a>
                    </div>

                ))}

            </div>


        </div>
        
        </div>
    ); 
}