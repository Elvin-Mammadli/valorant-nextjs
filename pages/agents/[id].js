import Image from "next/dist/client/image";
import styles from "../../styles/Agent.module.css";

export const getStaticPaths = async () => {

  const res = await fetch('https://valorant-api.com/v1/agents');
  const { data } = await res.json();
  data.splice(7,1);
  const paths = data.map(agent => {
    return {
      params: { id: agent.uuid.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch('https://valorant-api.com/v1/agents/' + id);
  const { data } = await res.json();

  return {
    props: { agent: data }
  }
}

const Details = ({ agent }) => {
  return (
    <div>
      <h1>{agent.displayName}</h1>
      <div className={styles.agentDetails}>
        <Image src={agent.bustPortrait} width={256} height={256} alt={`${agent.displayName} icon`} />
      </div>
      <p>{agent.description}</p>
      <audio controls>
        <source src={agent.voiceLine.mediaList[0].wave} type="audio/wav" />
      </audio>
    </div>
  )
}

export default Details