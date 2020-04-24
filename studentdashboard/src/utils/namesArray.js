import dataFromExcel from '../data/dataFromExcel';
export const returnStudentNames = () => {
    const names = [];
    dataFromExcel.forEach((item) => {
        if (!names.includes(item.studentName)) names.push(item.studentName);
    });
    return names;
};
