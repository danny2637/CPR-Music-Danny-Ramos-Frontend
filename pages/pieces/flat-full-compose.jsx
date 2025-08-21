// flat-full-compose.jsx
import Embed from 'flat-embed';
import { useEffect, useRef } from 'react';
import { CONCERT_PITCH_TREBLE_CLEF_MELODY_TEMPLATE } from './piano-tc-1measure-no-notes';

function FlatFullCompose({ onReady }) {
  const compositionRef = useRef(null);
  const embedObj = useRef(null);

  useEffect(() => {
    embedObj.current = new Embed(compositionRef.current, {
      score: 'blank',
      height: 300,
      embedParams: {
        mode: 'edit',
        appId: '60a51c906bcde01fc75a3ad0',
        controlsPosition: 'bottom',
      },
    });

    embedObj.current.ready().then(() => {
      embedObj.current.loadJSON(
        JSON.stringify(CONCERT_PITCH_TREBLE_CLEF_MELODY_TEMPLATE)
      );

      if (onReady) {
        onReady(embedObj.current);
      }
    });
  }, [compositionRef]);

  return <div ref={compositionRef} />;
}

export default FlatFullCompose;
