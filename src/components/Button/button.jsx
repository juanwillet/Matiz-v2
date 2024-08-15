function Button ({color, label, secondColor}) {
    return(
<button
style={{backgroundColor: color, color: secondColor}}
>
{label}
</button>
    )
}
export default Button