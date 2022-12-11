import { styled } from "../utils/theme";
import Head from "next/head";

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: url("/background.svg) ${(x: any) => x.theme.accent} 3px 1px fixed;
`;

const Image = styled(Background)`
  z-index: -1;
  background: url("/header_tess.svg") center no-repeat;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function Error({ statusCode }) {
    return(
        <>
            <Head>
                <title>{statusCode ? statusCode : "Error"} | winget</title>
            </Head>
            <Background>
                <Image />
                <Container>
                    <h1>
                        {statusCode
                            ? `An error${statusCode} occured on server`
                            : "An error occured on client"}
                    </h1>
                </Container>
            </Background>
        </>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
};

export default Error;