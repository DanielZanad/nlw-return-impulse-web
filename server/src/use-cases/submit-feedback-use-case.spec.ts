import { SubmitFeedbackUseCase } from './submit-feedback-use-case'


const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const SubmitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);


describe('Submit feedback', () => {


  it('should be able to submit a feedback', async () => {
    await expect(SubmitFeedback.execute({
      type: "BUG",
      comment: 'example comment',
      screenshot: 'data:image/png;base64'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without a type', async () => {
    await expect(SubmitFeedback.execute({
      type: "",
      comment: 'example comment',
      screenshot: 'data:image/png;base64'
    })).rejects.toThrow();

  });

  it('should not be able to submit feedback without a comment', async () => {
    await expect(SubmitFeedback.execute({
      type: "BUG",
      comment: '',
      screenshot: 'data:image/png;base64'
    })).rejects.toThrow();

  });

  it('should not be able to submit feedback without an invalid screenshot', async () => {
    await expect(SubmitFeedback.execute({
      type: "BUG",
      comment: 'example comment',
      screenshot: 'test.png'
    })).rejects.toThrow();

  });



});