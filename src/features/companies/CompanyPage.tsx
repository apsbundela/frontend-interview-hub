import { useParams } from 'react-router-dom';

const CompanyPage = () => {
  const { companyId } = useParams<string>();
  return <div>CompanyPage {companyId}</div>;
};

export default CompanyPage;
