import Button from '@commons/Button';
import { mbtiDescriptions } from '@utils/mbtiCalculator';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTestResult, updateTestResultVisibility } from '@apis/testResults';

const TestResultItem = ({ result, userId }) => {
  const queryClient = useQueryClient();

  const deleteResultMutation = useMutation({
    mutationFn: ({ id }) => deleteTestResult(id),
    onSuccess: () => {
      alert('삭제 완료!');
      queryClient.invalidateQueries(['results']);
    },
    onError: (error) => alert(error.response.data.message)
  });

  const patchResultMutation = useMutation({
    mutationFn: ({ id, visibility }) => updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      alert('변경 완료!');
      queryClient.invalidateQueries(['results']);
    },
    onError: (error) => alert(error.response.data.message)
  });

  const handleChangeVisibility = () => {
    patchResultMutation.mutate({ id: result.id, visibility: !result.visibility });
  };

  const handleDeleteResult = () => {
    deleteResultMutation.mutate({ id: result.id });
  };

  return (
    <div className="max-w-5xl w-full bg-gray-800 text-white p-4 md:p-6 rounded-xl shadow-lg my-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span>{result.nickname}</span>
        <span>{result.date}</span>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">{result.result}</h2>
        <p className="text-lg text-gray-300 mb-6">{mbtiDescriptions[result.result]}</p>
        {userId === result.userId && (
          <div className="w-full flex justify-end item-center">
            <Button
              name={result.visibility ? '비공개로 전환' : '공개로 전환'}
              type="button"
              className=" px-2 py-2 mx-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={handleChangeVisibility}
            />
            <Button name="삭제" type="button" onClick={handleDeleteResult} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResultItem;
