import AdminTestimonialsList from "@/components/admin/AdminTestimonialsList";
import { getSession, useSession } from 'next-auth/react';


const Testimonials = () => {
    const { data: session } = useSession();
    
  return (
    <div>
       <AdminTestimonialsList/>
    </div>
  )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
  
    if(!session) {
      return {
        redirect: {
          destination: '/admin',
          permanent: false
        }
      }
    }
  
    return {
      props: { session }
    } 
  }

export default Testimonials;