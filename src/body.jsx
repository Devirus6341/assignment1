

function Body(props) {
    return <div>
        <div> <p className="research-title">{props.topic}</p></div>
    
    <div className="assignment-body">
                <p className="research-subTitle">{props.subTopic}</p>
               <p className="research-details">{props.body}</p>
            </div>
        </div>
}

export default Body;