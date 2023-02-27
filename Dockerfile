FROM ubuntu:20.04

#한국 시간 셋팅
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
#apt 업데이트 필요 라이브러리 다운로드
RUN apt-get update && apt-get -y install sudo
RUN apt-get -y install npm && apt-get install curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
RUN export NVM_DIR="$HOME/.nvm"
RUN [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
RUN [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
RUN nvm install 12
RUN npm install react-scripts
RUN apt-get install git 
#git 소스 다운로드
RUN mkdir /dabda
RUN git clone https://github.com/qkqk2938/dabda /dabda



ENTRYPOINT ./bin/bash


#&& sudo apt install build-essential libssl-dev