import { VariantA, VariantB, VariantC } from './index';

function App() {
  return (
    <div className="app">
      <h1>React Vertical Stories - Demo</h1>
      
      <div className="story-wrapper">
        <h2>Variant A</h2>
        <VariantA
          title="My Story"
          description="This is a great story"
          image="https://picsum.photos/400/600"
          ctaText="Read More"
          href="#"
        />
      </div>

      <div className="story-wrapper">
        <h2>Variant B</h2>
        <VariantB
          title="My Story"
          description="This is a great story"
          ctaText="Learn More"
          onClick={(e) => console.log('Clicked!', e)}
        />
      </div>

      <div className="story-wrapper">
        <h2>Variant C</h2>
        <VariantC
          title="My Story"
          description="This is a great story"
          image="https://picsum.photos/400/600"
          ctaText="Start Now"
          background="#ff6b6b"
          isBackgroundImage={false}
        />
      </div>
    </div>
  );
}

export default App;