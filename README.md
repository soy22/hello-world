# hello-world
- @soy22(정소영)

## ch01
### 1-1
- 변수를 선언한다.
### 1-2
- 선언과 할당을 두 문장으로 나누어 명령하는 방법과 마지막 문장 같이 선언과 할당을 한 문장으로 명령하는 방법이 있다.
### 1-3
- 문자열 값과 숫자 값 모두 한 번 만든 값을 바꿀 수 없다. 변경은 새로 만드는 동작을 통해서만 이뤄진다. 이것이 바로 불변값의 성질이다.
### 1-4
- 참조형 데이터는 기본형 데이터와 다르게 '객체의 변수(프로퍼티) 영역'이 별도로 존재한다.
### 1-5
- 변수 obj1이 바라보고 있는 주소는 변하지 않고 데이터 2가 새로 만들어져서 2를 가리키게 된다.
### 1-6
- 변수 x와 arr의 index 0 둘 다 데이터 3을 가리킨다.
### 1-7
- 변수 a와 b 둘 다 데이터 10을 가리키고 obj2는 obj1이 가리키는 주소를 가리킨다.
### 1-8
- obj2.c=20 (객체의 프로퍼티 변경 시) 이 실행되면 obj1.c도 20을 가리키는 셈이다.
### 1-9
- 객체 자체를 변경했을 때 obj1과 obj2가 가리키는 주소는 달라지게 된다. (아마도.....내 피셜)
### 1-10
- user이라는 object까지 가변되는 문제점 -> user과 user2 가 서로 동일하다.
### 1-11
- 새로운 object를 만들어서 그 주소를 return하게 하면 user2만 변경시킬 수 있다. 
  하지만 새로운 객체를 만들면서 변경할 필요가 없는 기존 객체의 프로퍼티(gender)를 하드코딩으로 입력했다. 이런 식으로는 대상 객체에 정보가 많을수록 입력하는 수고가 늘어난다.
### 1-12
- copyObject는 for in 문법을 이용해 result 객체에 target 객체의 프로퍼티들을 복사하는 함수이다. 
### 1-13
- copyObject 함수를 통해 간단하게 객체를 복사하고 내용을 수정하는 데 성공했다.
### 1-14
- user 객체에 직접 속한 프로퍼티에 대해서는 복샇서 완전히 새로운 데이터가 만들어진 반면에 한 단계 더 들어간 urls의 내부 프로퍼티들은 기존 데이터를 그대로 참조한다. user.urls 프로퍼티에 대해서도 불변 객체로 만들 필요가 있다.
### 1-15
- user2.urls=copyObject(user.urls); 을 통해 urls 프로퍼티의 내부까지 복사해서 새로운 데이터를 만들었다.
### 1-16
- target이 객체인 경우 내부 프로퍼티들을 순회하며 copyObjectDeep 함수를 재귀적으로 호출한다. 원본과 사본이 서로 완전히 다른 객체를 참조하게 되어 어느 쪽의 프로퍼티를 변경하더라도 다른 쪽에 영향을 주지 않는다.
### 1-17
- 깊은 복사 결과를 확인하는 예제이다.
### 1-18
- 깊은 복사를 처리할 수 있는 다른 방법인 JSON. 객체를 JSON 문법으로 표현된 문자열로 전환했다가 다시 JSON 객체로 바꾼다.
### 1-19
- (1) 값을 대입하지 않은 변수, 즉 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근할 때
  (2) 객체 내부의 존재하지 않는 프로퍼티에 접근하려고 할 때
  (3) return 문이 없거나 호출되지 않는 함수의 실행 결과
  이 세 경우 undefined를 반환한다.
### 1-20
- '비어있는 요소'와 'undefined를 할당한 요소'는 출력 결과부터 다르다. '비어있는 요소'는 순회와 관련된 많은 배열 메서드들의 순회 대상에서 제외된다.
### 1-21
- 사용자가 명시적으로 undefined를 부여한 겯우는 그 자체로 값이다. 하나의 값으로 동작하기 때문에 이때의 프로퍼티나 배열의 요소는 프로퍼티 이름이 실존하게 되고, 따라서 순회의 대상이 될 수 있디.
- 사용자가 아무것도 하지 않은 채로 접근했을 때는 자바스크립트 엔진이 하는 수 없이 반환해주는 undefined는 해당 프로퍼티 내지 인덱스 자체가 존재하지 않음을 의미한다. 이렇게 각 메서드들이 비어 있는 요소에 대해서는 어떠한 처리도 하지 않고 건너뛴다.
- 본래의 의미에 따라 사용자가 없음을 표현하기 위해 명시적으로 undefined를 대입하는 것은 지양하는 것이 좋다. null을 사용하자.

## ch02
### 2-1
- 
