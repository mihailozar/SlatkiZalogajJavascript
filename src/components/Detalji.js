import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import ChocoNugat from "../assets/torte/choco-i-nugat.jpeg";
import CokoladnaTorta1 from "../assets/torte/Cokoladna-torta-1.jpeg";
import CokoladnaTorta2 from "../assets/torte/Cokoladna-torta-2.jpeg";
import CokoladnaTorta3 from "../assets/torte/cokoladna-torta.webp";
import Delfina from "../assets/torte/delfina-iacubl.jpeg";
import Torta from "../assets/torte/torta.jpeg";
import { Col, Row } from 'react-bootstrap';
import { useCart } from './CartContext.js'; // Path to your CartContext file


const CakeDetails = ({}) => {
  const { cakeId } = useParams(); // Get the cakeId from the URL
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(["Comment 1","Comment2"]); // State to store comments
  const [newComment, setNewComment] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(cake); // Assuming 'cake' contains the item details
  };


  // Assuming you have cake details from an API or some data source
  const cakeDetails = {
    1: { name: 'Choco nugat', imageUrl: ChocoNugat, description: 'Delicious chocolate cake', price: '10' },
    2: { name: 'Cokoladna torta1', imageUrl: CokoladnaTorta1, description: 'Yummy vanilla cake', price: '12' },
    3: { name: 'Cokoladna torta2', imageUrl: CokoladnaTorta2, description: 'Yummy vanilla cake', price: '12' },
    4: { name: 'Cokoladna torta3', imageUrl: CokoladnaTorta3, description: 'Yummy vanilla cake', price: '12' },
    5: { name: 'Delfina', imageUrl: Delfina, description: 'Yummy vanilla cake', price: '12' },
    6: { name: 'Torta', imageUrl: Torta, description: 'Yummy vanilla cake', price: '12' },
    // Add details for each cake item
  };

  const cake = cakeDetails[cakeId];

  if (!cake) {
    return <div>Cake not found</div>; // Handle non-existing cake ID
  }

  const handleCommentsClick = () => {
    // Function to toggle comments visibility
    setShowComments(!showComments);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]); // Add the new comment to the comments list
      setNewComment(''); // Clear the input field after submitting the comment
    }
  };

  return (
    <div className="cake-details">
        <Row>
            <Col>
      <div className="cake-image">
      <div className="image-container">
        <img src={cake.imageUrl} alt="Your Image" />
            <div className="overlay" onClick={handleCommentsClick}>
                <span> Komentari</span>
            </div>
        </div>
        
      </div>
      </Col>
      <Col>
      <div className="cake-info"> 
        {/* Render comments section based on showComments state */}
        {showComments? (
          <div >
            <h2>Cake Comments</h2>
                {comments.length > 0 ? (
                  comments.map((comment, index) => <p key={index}>{comment}</p>)
                ) : (
                  <p>No comments yet</p>
                )}
                <form onSubmit={handleCommentSubmit}>
                  <input
                    type="text"
                    placeholder="Add a new comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button type="submit">Add Comment</button>
                </form>
          </div>
        ):(
            <div>
            <h2>Cake Details</h2>
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        )}
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default CakeDetails;
