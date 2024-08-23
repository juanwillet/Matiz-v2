import { Children } from "react"

function Button ({color, label, secondColor, callback}) {
    return(
<button
style={{backgroundColor: color, color: secondColor}}
onClick={callback}
>
{label}
</button>
    )
}
export default Button