import { Segment, Header, Title, Content } from "./styled";

const Section = ({ title, content, extraHeaderContent }) => (
    <Segment>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Content>
            {content}
        </Content>
    </Segment>);

export default Section;