import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const AuthCallback = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkEmailConfirmation = async () => {
      // Get the session to see if the user is authenticated
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
        return;
      }

      // If the user is authenticated, check for email confirmation
      if (session) {
        const { data, error } = await supabase
          .from("users")
          .select("email_confirmed_at")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("Error checking email confirmation:", error);
          return;
        }

        // Check if the email is confirmed
        if (data?.email_confirmed_at) {
          // Redirect to the dashboard if confirmed
          router.push("/dashboard");
        } else {
          alert("Your email is not confirmed yet. Please check your inbox.");
        }
      }
    };

    checkEmailConfirmation();
  }, [router, supabase]);

  return <div>Loading...</div>;
};

export default AuthCallback;
