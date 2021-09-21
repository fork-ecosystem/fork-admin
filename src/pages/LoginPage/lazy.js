import lazy from '@/src/utils/lazy';

export default lazy(() => import(/* webpackPrefetch: true */ './index'));
