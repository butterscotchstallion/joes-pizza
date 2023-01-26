import './slice.css';

function SliceImage({ info }) {
    return (
        <img src={"images/" + info.filename} alt="{info.altText}" className="slice-image" />
    );
}

export default function Slice({ info }) {
    return (
        <div className="slice-wrapper">
            <h4>{info.name}</h4>
            <figure>
                <button type="button" className="add-to-cart-button">Order Now</button>
                <SliceImage info={info} />
                <figcaption>{info.description}</figcaption>
            </figure>
        </div>
    );
}