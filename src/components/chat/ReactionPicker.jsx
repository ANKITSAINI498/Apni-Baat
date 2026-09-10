export default function ReactionPicker({onPick}){return <div className="reaction-picker">{['❤️','😂','👍','🔥','😮','😢','👏'].map(e=><button key={e} onClick={()=>onPick(e)}>{e}</button>)}</div>}
