import FlashCard from "./FlashCard";

export default function FCBox({numFC}) {
    
    
    return (
        <div className="flex-container">
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            {/* <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard /> */}
        </div>
    )
}