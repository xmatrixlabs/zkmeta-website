<template>
  <div class="home">
    <div class="ZkMeta">
      <div class="title">ZkMeta slogon</div> 
       <div class="introduction">
        <div class="introduction-center">
          <div class="introduction-title">What is ZkMeta?</div>
          <div class="introduction-content"><span class="prominent-content">ZkMeta is a privacy protection computing framework developed by X-Matrix Labs. </span> In essence, ZkMeta is a Web3.0 privacy protection infrastructure that aims to protect user and business data in lieu of the General Data Protection Regulation (GDPR). ZkMeta provides customized privacy preserving solutions suitable for various businesses. In addition, ZkMeta offers pre-optimized technical selections and solutions. Currently, ZkMeta includes Zero-Knowledge Proof (ZKP) protocols such as ZK-3D and ZK-Rollup.</div>
        </div>
      </div>     
    </div>
   
    <div class="accomplish">
      <div class="accomplish-center">
        <div class="accomplish-title">What goals is ZkMeta trying to accomplish?</div>
        <div class="accomplish-content">ZkMeta has a modularized design that fully embraces operability and configurability.<span class="prominent-content"> With ZkMeta, you can get a full package with the most secure, reliable and pluggable privacy-preserving services with formidable cryptographic support.</span> Finally, ZkMeta ensures that data is censored, trackable, verifiable and not tampered with.</div>
      </div>
    </div>
    
    <div class="special">
      <div class="special-center">
        <div class="special-title">What makes ZkMeta so special?</div>
        <div class="special-both">
            <div class="left">The ZK3D protocol of ZkMeta realizes value transfer in a setting where data is fully private. This protocol is capable of performing 4 arithmetic operations, range proof and size comparison on encrypted data. There are 4 outstanding features of the ZK3D protocol:</div>
            <div class="right">
              <div class="content-item-four">
                <div class="item-title">Straightforward</div>
                <div class="item-text">no overhead on user operations; no additional knowledge is needed to use the protocol;</div>
              </div>
              <div class="content-item-four">
                <div class="item-title">Decentralized</div>
                <div class="item-text">users fully own their data without compromise;</div>
              </div>
              <div class="content-item-four">
                <div class="item-title">Fast</div>
                <div class="item-text">proofs are generated and verified within milliseconds;</div>
              </div>
              <div class="content-item-four">
                <div class="item-title">Secure</div>
                <div class="item-text">rigorous cryptographic proof.</div>
              </div>
            </div>
        </div>
        <div class="special-both">
            <div class="left"> In addition, the ZK-Rollup protocol of ZkMeta utilizes the most up-to-date PLONK ZKP algorithm as PLONK does Trust Setup for only once. The top 3 features of the ZK-Rollup protocol are:</div>
            <div class="right">
              <div class="content-item">Extremely low transaction fees;</div>
              <div class="content-item">Trustless protocols;</div>
              <div class="content-item">Cryptographically secure, similar to the Ethereum mainnet.</div>
            </div>
        </div>
        <div class="special-single">The Rollup validator(s) can never corrupt the state or steal funds (unlike Sidechains). Users can always retrieve the funds from the Rollup even if validators stop cooperating because the data is available (unlike Plasma). Thanks to validity proofs, neither users nor a single trusted party needs to be online to monitor Rollup blocks in order to prevent fraud (unlike payment channels or Optimistic Rollups).</div>
      </div>
    </div> 

    <div class="Architecture">
      <div class="Architecture-center">
        <div class="Architecture-title">ZkMeta Architecture</div>
        <div class="Architecture-content">
          <div class="content-item"><span class="prominent-content">Core layer</span>  is built on top of the newest theoretical breakthroughs of Zero-Knowledge-Proof (ZKP) such as optimizations of performance, trust setting and security, all of which will be published in academic papers.</div>
          <div class="content-both">
            <div class="both-item"><span class="prominent-content">Platform layer</span> is where wallets with novel features can be developed. It supports privacy-preserving and offline transactions and multi-party signing, and is adaptable to multiple blockchains. On the platform, you can improve the current ZKP toolkits as well as their documentation. Similar concepts are borrowed from the zkSync and AZTEC projects.</div>
            <div class="both-item">The platform has its own value exchange protocols to leverage privacy-preserving data. In addition, the platform can perform the 4 basic arithmetic operations, range proof and size comparisons on encrypted data.</div>
          </div>
          <div class="content-item"><span class="prominent-content">Application layer</span>  captures the latest market trend and supports fast prototyping. In a short term, this layer aims at Non-Fungible Tokens (NFT) and anonymous auction.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang='scss' scoped>
@media screen and (max-width: 800px) {
.home{
  background-color: $back-blueColor;

  .prominent-content{
    @include prominent-contentH5();
  }
  .ZkMeta{
    @include column-center;

    .title{
      padding-top: 200px;
      color: #fff;
      font-size: 42px;
      font-weight: bold;
    }
     .introduction{
      width: $main-widthH5;
      margin-top: 289px;
      @include column-center;
      .introduction-center{
        .introduction-title{
          @include first-titleH5;
        }
        .introduction-content{
          margin-top: 20px;
          @include contentH5;

        }
      }
      
    }
  }
 
  .accomplish{
    margin-top: 89px;
    padding: 40px 0;
    background-color: $back-blackColor;
    @include column-center;
    .accomplish-center{
      width: $main-widthH5;
      .accomplish-title{
        @include first-titleH5;
      }
      .accomplish-content{
        margin-top: 20px;
        @include contentH5;

      }
    }
    
  }
  .special{
    @include column-center;
    .special-center{
      width: $main-widthH5;
      .special-title{
        margin-top: 100px;
        margin-bottom: 20px;
        @include first-titleH5;
      }
      .special-both{
        padding-bottom: 48px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .left{
          width: 100%;
          @include contentH5;
        }
        .right{
          width: 100%;
          margin-top: 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .content-item-four{
            width: $main-widthH5;
            margin-top: 20px;
            padding: 0  10px 20px  18px;
            background-color:#171A4A;
            .item-title{
              margin-top: 28px;
              font-size: 24px;
              font-weight: 600;
              color: #FFFFFF;
              line-height: 21px;
              text-align: left;
            }
            .item-text{
              margin-top: 18px;
              font-size: 14px;
              font-weight: 300;
              color: #FFFFFF;
              line-height: 21px;
              text-align: left;
            }
          }
          .content-item{
            width: $main-widthH5;
            margin-top: 20px;
            padding: 23px  10px 25px  18px;
            background-color:#171A4A;
            font-size: 14px;
            line-height: 21px;
            color: #fff;
            text-align: left;
            
          }
          
        
        }
      }
      .special-single{
        @include contentH5;
      }
    }
    
  }

  .Architecture{
    margin-top: 170px;
    @include column-center;
    .Architecture-center{
      width: $main-widthH5;
      .Architecture-title{
        @include first-titleH5;

      }
      .Architecture-content{
        margin-top: 32px;
        margin-bottom: 124px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .prominent-content{
          height: 21px;
          font-size: 24px;
          font-family: SFProDisplay-Semibold, SFProDisplay;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 21px;
          margin-right:5px ;
        }
        .content-both{
          margin-top: 32px;

          box-sizing: border-box;
          padding:34px 15px 30px 19px;
          background-color: $back-blueLightColor;
          border-radius: 8px;
          text-align: center;
          .both-item{
            &:last-child{
             margin-top: 32px;
            }
            @include contentH5;
            text-align: left;
          }
        }
        .content-item{
          padding:34px 33px 30px 30px;
          box-sizing: border-box;
          margin-top: 32px;
          @include contentH5;
          background-color: $back-blueLightColor;
          border-radius: 8px;
          text-align: left;

        }

      }
    }
    
  }
}
}
@media screen and (min-width: 800px) {
.home{
  min-width: $min-width;
  background-color: $back-blueColor;
  .prominent-content{
    @include prominent-content();
  }
  .ZkMeta{
    height: 1080px;
    .title{
      padding-top: 327px;
      color: #fff;
      font-size: 80px;
      line-height: 95px;
      font-weight: bold;
    }
     .introduction{
       margin-top: 329px;
      @include column-center;
      .introduction-center{
        width: $main-width;
        .introduction-title{
          @include first-title;

        }
        .introduction-content{
          margin-top: 20px;
          @include content;
        }
      }
      
    }
  }
 
  .accomplish{
    height: 289px;
    background-color: $back-blackColor;

    @include column-center;
    .accomplish-center{
      width: $main-width;
      .accomplish-title{
        margin-top: 81px;
        @include first-title;
      }
      .accomplish-content{
        margin-top: 20px;
        @include content;

      }
    }
    
  }
  .special{
    @include column-center;
    .special-center{
      width: $main-width;
      .special-title{
        margin-top: 100px;
        margin-bottom: 20px;
        @include first-title;
      }
      .special-both{
        padding-bottom: 48px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .left{
        width: 100%;
          @include content;
        }
        .right{
          width: 100%;
          margin-top: 26px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .content-item-four{
            width: 188px;
            height: 155px;
            padding: 0  10px 0  18px;
            background-color:#171A4A;
            .item-title{
              margin-top: 28px;
              font-size: 24px;
              font-weight: 600;
              color: #FFFFFF;
              line-height: 21px;
              text-align: left;
            }
            .item-text{
              margin-top: 18px;
              font-size: 14px;
              font-weight: 300;
              color: #FFFFFF;
              line-height: 21px;
              text-align: left;
            }
          }
          .content-item{
            width: 228px;
            // height: 90px;
            padding: 23px  36px 25px  26px;
            background-color:#171A4A;
            font-size: 14px;
            line-height: 21px;
            color: #fff;
            text-align: left;
            
          }
          
        
        }
      }
      .special-single{
        @include content;
      }
    }
    
  }

  .Architecture{
    margin-top: 170px;
    @include column-center;
    .Architecture-center{
      width: $main-width;
      .Architecture-title{
        @include first-title;

      }
      .Architecture-content{
        margin-top: 32px;
        margin-bottom: 124px;
        display: flex;
        justify-content: space-between;
        .prominent-content{
          height: 21px;
          font-size: 24px;
          font-family: SFProDisplay-Semibold, SFProDisplay;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 21px;
          margin-right:5px ;
        }
        .content-both{
          box-sizing: border-box;
          width: 290px;
          height: 430px;
          padding:34px 15px 0 19px;
          background-color: $back-blueLightColor;
          border-radius: 20px;
          text-align: center;
          .both-item{
            &:last-child{
             margin-top: 32px;
            }
            @include content;
            text-align: left;
          }
        }
        .content-item{
          padding:34px 33px 0 30px;
          box-sizing: border-box;
          margin-top: 32px;
          width: 290px;
          height: 307px;
          @include content;
          background-color: $back-blueLightColor;
          border-radius: 20px;
          text-align: left;

        }

      }
    }
    
  }
}
}
</style>
