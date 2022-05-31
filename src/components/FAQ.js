import Header from "./Header";
import Faq from "react-faq-component";
import '../style.css';

function FAQPage() {
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "What is AI Azuki NFTs?",
                content: `AI Azuki NFTs are print-quality images with 3072x3072 pixels resolution and 300 dpi.`,
            },
            {
                title: "How is the minting done?",
                content: `Everyone has equal chances of minting.`,
            },
            {
                title: "How many AI Azuki NFTs are there and what is the price?",
                content: `There are 5,000 AI Azuki NFTs. The first 1000 you can get for free. The remaining 4000 at a price of 0.05 ETH each.`,
            },
            {
                title: "How many AI Azuki NFTs per user?",
                content: `There is no limit per user.`,
            },
            {
                title: "How many AI Azuki NFTs can I mint in 1 transaction?",
                content: `During the free mint (first 1000 NFTs), you can mint up to 3 AI Azukis per transaction. For the remaining 4000 NFTs - up 5 AI Azukis per transaction.`,
            },
            {
                title: "Is there a Discord?",
                content: `The community Discord server will be created soon. Meanwhile, follow us on Twitter to stay tuned!`,
            },
            {
                title: "How to mint an NFT?",
                content: <div>
                    <p>1. Install metamask.io extension for Chrome browser on your PC and create the Ethereum wallet. Alternatively, you can open an Ethereum wallet in any other app of your choice.</p>
                    <p>2. Purchase Ether from various exchanges, such as Coinbase or Binance, and transfer it to your Ethereum wallet.</p>
                    <p>3. Go to the MINT page of our website.</p>
                    <p>4. Connect your Ethereum wallet (your Ethereum wallet app (e.g.: Metamask) will ask you to confirm this action).</p>
                    <p>5. Select the amount to mint.</p>
                    <p>6. Click “MINT” button. Your Ethereum wallet app (e.g.: Metamask) will ask you to confirm the transaction.</p>
                    <p>7. Your NFT will appear on the OpenSea soon.</p>
                </div>
            },
            {
                title: "Wen whitelist?",
                content: `There will not be any whitelist. There are only the first 1000 free AI Azukis available to everyone. To mint one of these, you will only have to pay for gas.`,
            },
            {
                title: "Where can I find my NFT?",
                content: <div>The easiest way is to login to <a className="twitterProfile" target="_blank" rel="noreferrer" href="https://opensea.io/collection/ainightbirds">Opensea</a> using the same wallet you used for minting. Next, go to your profile. You can find your NFTs in the 'Collected' section.</div>
            },
            // {
            //     title: "Where can I check your smart contract out?",
            //     content: <div>Here you go: <a className="twitterProfile" target="_blank" rel="noreferrer" href="https://etherscan.io/address/0x64b6b4142d4D78E49D53430C1d3939F2317f9085">0x64b6b4142d4D78E49D53430C1d3939F2317f9085</a></div>
            // },
            {
                title: "How are AI Azuki NFTs created?",
                content: <div>
                    <p>Here is the recipe for you:</p>
                    <p>1. Find appropriate neural network models of your choice.</p>
                    <p>2. Train your neural network.</p>
                    <p>3. Run thousands of experiments and tests to get the best results. Our team generates a total of over 90,000 images during the experimentation stage. </p>
                    <p>4. Put a few weeks of rendering.</p>
                    <p>5. AI Azukis are now born into this world.</p>
                </div>
            },
            {
                title: "Will I receive IP rights for my AI Azuki(s)?",
                content: `You will get full IP rights.`,
            },
            {
                title: "Do creators of AI Azuki hold the IP rights for the collection?",
                content: `Yes, we do possess all IP rights for the collection. Due to the technique we use, the AI Azuki images are created from scratch. The interpretation from the original Azuki is up to anyone's imagination.`,
            },
            {
                title: "How many AI Azuki will be availble for mint?",
                content: `100 AI Azuki will be reserved for our team. All others will be available for public mint.`,
            },
            {
                title: "Who are the creators?",
                content: <div>
                    <p>To be revealed.</p>
                    {/* <p><a className="twitterProfile" target="_blank" rel="noreferrer" href="https://twitter.com/BorSergOS">@BorSergOS</a> - Talented AI ARTist. Keen on transforming avatar NFTs into real art. Creator of <a className="twitterProfile" target="_blank" rel="noreferrer" href="https://twitter.com/IWasRightNFT">@IWasRightNFT</a></p> */}
                </div>
            },
            {
                title: "Future projects?",
                content: `We have plans to integrate our technology into a platform to empower anyone from creating their own amazing art and express themselves. Holders of AI Azuki will be allowed for a special airdrop of an early pass to the platform!`
            },
        ],
    };

    const styles = {
        bgColor: 'transparent',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowContentColor: 'white',
        arrowColor: "white",
    };

    const config = {
        // animate: false,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className="FAQPage">
            {<Header />}
            <div className="container pt-3 pb-5 faq-section-container">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
}

export default FAQPage;
