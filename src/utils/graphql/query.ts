import { gql } from "@apollo/client";

export const QUERY_GET_PROJECTS = gql`
  query getAllProjects {
    getAllProject {
      id
      description
      title
      image
      linkRepo
      linkDemo
    }
  }
`;

export const QUERY_GET_ALL_RESUME_DATA = gql`
  query getResumePageProps {
    getAllCertificate {
      id
      company
      time
      title
    }
    getAllEducation {
      id
      title
      time
      description
    }
    getAllExperiences {
      id
      title
      time
      description
    }
  }
`;
