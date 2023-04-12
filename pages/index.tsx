import { NextPage } from "next";
import { Web3AuthProvider } from "../providers/web3AuthProvider";
import Main from "../components/main";


const Home: NextPage = () => {
    return (
        <Web3AuthProvider web3AuthNetwork="testnet">
            <Main />
        </Web3AuthProvider>
    )
}

export default Home;