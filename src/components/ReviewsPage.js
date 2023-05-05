import React, {useState} from "react"
//import '../styles/'
function Reviews(){
    //{initialise and set a name constant and set it to initial empty value ("")}
    const [name, setName]= useState("")

    //{initialise and set initial state of the reviews to empty}
    const [review, setReview]= useState("")

    //{initialise a reviews array that holds the reviews}
    const[reviews, setReviews]= useState([])

    //{Submit function that handles a submit event}
    function handleSubmit(e){
        e.preventDefault();

        //{a new review will require a name of the reviewer and their particular review}
        const newReview ={name: name, review:review, likes: 0};
        setReviews([...reviews, newReview]);
        setName("");
        setReview("")

   }
    //add a function that handles likes to a given comment
    function handleLikes(index){
        //an array that copies the reviews array
        const likedReviews=[...reviews];
        //updates the liked reviews by incrementimg by 1
        likedReviews[index].likes+=1;
        //updates the  reviews
        setReviews(likedReviews);
    }
   return(
    //{the div below holds a form  collects and sets the name and review from an individual. The second part is the array above setReviews is mapped and returns a the name and reviews  }
    
    <div className="reviews-container">
      <div className="reviews-form">
      <h2>Leave a review</h2>
        
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                    <input 
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
            </label>
            <label>
                Review:
                
                    <textarea 
                        value={review}
                        onChange={(e)=>setReview(e.target.value)}
                    />            
            </label>
            <button type="submit" className="btn">Submit Review</button>
        </form>


        <div className="reviews-list">
        {reviews.map((review, index)=>(

            <div key={index} className="review">
                
                <h4>{review.name}</h4>
                <p>{review.review}</p>

                <div className="likes">
                <button onClick={()=>handleLikes(index)} className="btn">{review.likes>1 ? "Likes": "Like"}({review.likes})</button>
                </div>
            </div>
            ))}
        </div>
      </div>

        
        
    </div>
   )
}
//should be renderd in the app component
export default Reviews;