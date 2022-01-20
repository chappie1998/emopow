import React from "react";
// import range from "lodash/range";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import anger from './images/anger.jpg'
import happy from './images/happy.jpg'
import sad from './images/sad.jpg'
import revel from './images/revel.png'


const noOfItems = 27;
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1500px;
  margin: 0 auto;
`;

const items = [
    { title: "Anger", image: anger },
    { title: "Sadness", image: sad },
    { title: "Happiness", image: happy },
    { title: "Fear", image: revel },
    { title: "Surprise and Dismay ", image: revel },
    { title: "Disgust", image: revel },
    { title: "Passionate Love", image: revel },
    { title: "Sensory Pleasure", image: revel },
    { title: "Awe", image: revel },
    { title: "Excitement", image: revel },
    { title: "Relief", image: revel },
    { title: "Sympathy", image: revel },
    { title: "Anxiety", image: revel },
    { title: "Awkwardness", image: revel },
    { title: "Guilt", image: revel },
    { title: "Shame", image: revel },
    { title: "Amusement", image: revel },
    { title: "Pity", image: revel },
    { title: "Calmness", image: revel },
    { title: "Hope", image: revel },
    { title: "Pride", image: revel },
    { title: "Boredom", image: revel },
    { title: "Envy", image: revel },
    { title: "Confusion", image: revel },
    { title: "Nostalgia", image: revel },
    { title: "Craving", image: revel },
    { title: "Admiration", image: revel },
  ];


// const carouselItems = range(noOfItems).map(index => (
const carouselItems = items.map((item, index) => (    
    // <SlideItem key={index}>
        <div key={index} className="mt-5 tran-box road-box justify-content-center text-center">
            <h2 className="justify-content-center text-center">{item.title}</h2>
            {/* <p className="tran-para">
                Pain in not just a world, let's show what it is by the art
            </p> */}
            <img style={{borderRadius: "50%", marginTop:"10px"}}
                height="200"
                width="200"
                alt=""
                src={item.image}>
            </img>
            <h3 className="tran-para mt-4">
                Emotion {index}
            </h3>
        </div>
    // </SlideItem>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button className="slider-btn">{">"}</button>}
          leftChevron={<button className="slider-btn">{"<"}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
