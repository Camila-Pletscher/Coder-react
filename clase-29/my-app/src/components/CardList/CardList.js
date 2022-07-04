import Card from '../Card/Card';
import './CardList.css'

function CardList(props){
    return (
        <div className='cards-list'>
            {props.cards.map((card) => (
                <Card 
                    name={card.name}
                    id={card.char_id}
                />
                ))}

        </div>
        
    )
}

export default CardList;