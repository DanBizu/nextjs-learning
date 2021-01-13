import { useRouter } from 'next/router';
import { Param } from '../../styles/name';

export default function Test() {
   const router = useRouter();
   const { name } = router.query;

   return (
      <div className="test">
         <h1>I matched the route param:</h1>
         <Param>{name}</Param>
      </div>
   );
}
