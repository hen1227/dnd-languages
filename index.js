import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App() {
  return (
    <div>
      <h2>react node js file upload example</h2>

      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={0.5}
          style={{
            background: rgb(255,235,147),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0.5}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
 
export default App;