import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicSemesterManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return <div>Academic Semester</div>;
};

export default AcademicSemester;
