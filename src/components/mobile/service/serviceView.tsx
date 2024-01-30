"use client";
import { Link, Snippet } from "@nextui-org/react";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import CodeBlock from "@/components/codeBlock";
export default function ServiceView() {
  const Auth = `  const {fetchData} = useLoginFetcher();
    const handleLogin = async () => {
    try {
      const response = await fetchData(email, password);
      console.log('Login successful', response);
      navigation.navigate('Root');
    } catch (error: any) {
      ToastAndroid.showWithGravity(
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );

      // Handle login failure
      if (error.message === 'Invalid credentials') {
        // Implement your logic here, such as displaying an error message or locking the account
        ToastAndroid.showWithGravity(
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      }
    }
  };`;
  const product = `  //For Fetch Api Product
  //const {data, loading, error} = useDataFetcher();
  //if (loading) {
  //  // Show loading indicator while data is being fetched
  //  return (
  //    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //      <ActivityIndicator size="large" color="#0000ff" />
  //    </View>
  // );
  //}
  //if (error) {
  //  // Show loading indicator while data is being fetched
  //  return <Text>{error}</Text>;
  //}`;
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-3xl">Quick Start</div>
      <div className="flex flex-row mt-5">
        <CheckBadgeIcon width={30} height={30} className="text-green-600" />
        <div className="font-semibold text-large ml-3 justify-center items-center flex">
          Management State
        </div>
      </div>
      <div className="space-x-3 mt-5">
        <Link
          isExternal
          showAnchorIcon
          href="https://redux.js.org/introduction/getting-started"
          color="success"
          size="lg"
        >
          Redux
        </Link>
      </div>
      <div className="flex flex-row mt-5">
        <CheckBadgeIcon width={30} height={30} className="text-green-600" />
        <div className="font-semibold text-large ml-3 justify-center items-center flex">
          Consume Api
        </div>
      </div>
      <div className="font-normal text-base my-5">
        I use encryption to store the access token
      </div>
      <div className="font-medium text-lg my-5">Example Call Api Auth</div>
      <div className="font-normal text-base my-5">
        Component: Auth/login,Auth/register
      </div>
      <div>
        <CodeBlock code={Auth} language="react" />
      </div>
      <div className="font-medium text-lg my-5">Example Call Api Product</div>
      <div className="font-normal text-base my-5">
        Screen: List Product,Detail Product,Search <br /> Component: Product
        Card,Product View,Product Banner View
      </div>
      <div>
        <CodeBlock code={product} language="react" />
      </div>
      <div className="font-medium text-lg my-5">Example Call Api Order</div>
    </div>
  );
}
