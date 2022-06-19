import Link from 'next/link';
import Image from "next/dist/client/image";
import styles from '../../styles/Agents.module.css';

export const getStaticProps = async () => {

  const res = await fetch('https://valorant-api.com/v1/agents');
  const { data } = await res.json();
  data.splice(7, 1)

  return {
    props: { agents: data }
  }

}

const Agents = ({ agents }) => {
  console.log(agents)
  return (
    <div>
      <h1>Agents</h1>
      <div className={styles.container}>
        {agents.map(agent => (
          <Link href={`/agents/${agent.uuid}`} key={agent.uuid}>
            <a className={styles.single}>
              <h3>{agent.displayName}</h3>
              <div className={styles.imageContainer}>
                <Image width={128} height={128} src={agent.displayIcon} alt={agent.displayName} />
                {agent.background && <Image width={128} height={128} src={agent.background} alt="background image" />}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Agents;