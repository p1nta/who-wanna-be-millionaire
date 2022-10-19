import Player from './player';

const Sounds: React.FunctionComponent<{ music: string }> = ({ music }) => (
  <>
    <Player key="announcer_talk" url="/sound/announcer_talk.mp3" play={music === 'announcer_talk'} />
    <Player key="correct" url="/sound/correct.mp3" play={music === 'correct'} />
    <Player key="timing" url="/sound/question.mp3" play={music === 'question'} />
    <Player key="wrong" url="/sound/wrong.mp3" play={music === 'wrong'} />
  </>
);

export default Sounds;
