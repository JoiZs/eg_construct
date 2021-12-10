import type { NextPage } from 'next'
import Loadable from 'react-loadable'
import { Loading } from '../components/loading'

const LoadableComponent = Loadable({
  loader: () => import('../components/home'),
  loading: ()=> <Loading />,
});

const Home: NextPage = () => {
  return (
    <div className='container dark:bg-black dark:text-white'>
      <LoadableComponent />
    </div>
  )
}

export default Home
