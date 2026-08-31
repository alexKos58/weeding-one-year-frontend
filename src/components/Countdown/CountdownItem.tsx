type Props = {

    value:number;

    label:string;

};

export default function CountdownItem({

    value,

    label

}:Props){

    return(

        <div className="countdown__item">

            <div className="countdown__number">

                {String(value).padStart(2,"0")}

            </div>

            <span>

                {label}

            </span>

        </div>

    );

}