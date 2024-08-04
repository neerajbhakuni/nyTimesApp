import { act } from "react";
import { renderHook } from "@testing-library/react";
import { useMostPopularEndPoint } from "./useMostPopularEndPoint";

const mockEvent = {
  target: {
    value: "4",
  },
} as React.ChangeEvent<HTMLSelectElement>;

describe("useMostPopularEndPoint actions", () => {
  test("check default article Page", () => {
    const { result } = renderHook(() => useMostPopularEndPoint());
    expect(result.current.period).toEqual("1");
  });

  test("check default popular Article", () => {
    const { result } = renderHook(() => useMostPopularEndPoint());
    expect(result.current.articles).toEqual([]);
  });

  test("check onDropDownChangeValue popular Article", () => {
    const { result } = renderHook(() => useMostPopularEndPoint());
    act(() => {
      result.current.onDropDownChangeValue(mockEvent);
    });
    expect(result.current.period).toBe("4");
  });
});
