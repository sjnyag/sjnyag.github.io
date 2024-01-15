import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, CardHeader, Link, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { basePath } from "../../next.config";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AppsIcon from '@mui/icons-material/Apps';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const BASE_PATH = basePath ? basePath : "";

type Link = {
  text: string;
  url: string;
}

type Card = {
  title: string;
  category: string;
  content?: string;
  image: { url: string, position?: 'top' | 'center' };
  links: Link[];
}

const MediaCard = (props: Card) => {
  return (
    <Card sx={{ width: 380 }}>
      <CardMedia
        sx={{ height: 200, backgroundPosition: props.image.position || 'center', backgroundSize: "100%" }}
        image={props.image.url}
        title={props.title}
      />
      <CardHeader title={props.title} subheader={props.category} />
      <CardContent>
        {props.content && <Typography variant="body2" color="text.secondary" sx={{ height: 100, whiteSpace: 'pre-wrap' }}>
          {props.content}
        </Typography>}
      </CardContent>
      <CardActions>
        {props.links.map((link, index) => <Button size="small" key={index} href={link.url}>{link.text}</Button>)}
      </CardActions>
    </Card>
  );
}

export default function Home() {
  const profile = [
    {
      title: '名前',
      content: '河上真也（カワカミシンヤ）'
    },
    {
      title: 'メール',
      content: 'sjnyas@gmail.com'
    },
    {
      title: '役割',
      content: ['Webエンジニア（フロントエンド/バックエンド）', 'プロダクトマネージャー', 'Androidエンジニア', 'テストエンジニア'].join('\n')
    },
    {
      title: 'スキル',
      content: ['フロントエンド（React、Vue、AngularJS）', 'バックエンド（NestJS、Rails、JavaEE、Spring、GraphQL）', 'データベース（MySQL、Postgres、DynamoDB、Redis、Sybase）', 'AWS（ALB、ECS、ECR、Lambda、S3、CloudFront、Route 53、VPC、API Gateway、EventBridge、Cloudwatch、SES）', 'CI（CloudFormation、CodePipeline、Bitrise）', 'Android',].join('\n')
    },
    {
      title: 'プログラミング言語',
      content: ['HTML、CSS、TypeScript、JavaScript、C++、Java、Python、Ruby、Perl、Shell、SQL'].join('\n')
    }
  ];
  const outputCards: Card[] = [
    {
      title: 'GitHub',
      category: 'リポジトリ',
      content: '本ポートフォリオに記載している、個人開発のアプリやライブラリを公開しています。',
      image: { url: `${BASE_PATH}/GitHub.png` },
      links: [
        {
          text: 'https://github.com/sjnyag',
          url: 'https://github.com/sjnyag'
        }
      ]
    },
    {
      title: 'Qiita',
      category: '技術記事',
      content: '記事例\n・Androidのリスト操作UIまとめ（53いいね）\n・Android内にHttpサーバを立てて、ChromeCastでローカルファイルを再生する（29いいね）・\n・BITRISEを用いたAndroidアプリの自動配布（25いいね）',
      image: { url: `${BASE_PATH}/Qiita.png` },
      links: [
        {
          text: 'https://qiita.com/sjnya',
          url: 'https://qiita.com/sjnya'
        }
      ]
    },
    {
      title: 'Zenn',
      category: '技術記事',
      content: '記事例\n・AWS CodePipelineでLambdaにECRイメージの自動デプロイ\n・TeamsチャネルのメールアドレスにAmazon SESからのメール投稿が反映されない時に確認すること',
      image: { url: `${BASE_PATH}/Zenn.png` },
      links: [
        {
          text: 'https://zenn.dev/sjnya',
          url: 'https://zenn.dev/sjnya'
        }
      ]
    }
  ];
  const appCards: Card[] = [
    {
      title: 'Stamp Music Player',
      category: 'Androidアプリ',
      content: '聴けば聴くほど学習し成長するパーソナルなAndroid音楽プレイヤー。\n「1年前にずっと聞いていた曲」や「今年の再生数ベスト30」といった自分だけのプレイリストで音楽再生を行うことができます。',
      image: { url: `${BASE_PATH}/StampMusicPlayer.png` },
      links: [
        {
          text: 'Play Store',
          url: 'https://play.google.com/store/apps/details?id=com.sjn.stamp'
        },
        {
          text: 'リポジトリ',
          url: 'https://github.com/sjnyag/stamp'
        }
      ]
    },
    {
      title: 'Poogle',
      category: 'Androidアプリ',
      content: 'ポケモンのサポートツールアプリ。\nゲーム内で育成したモンスターやパーティを管理したり、モンスターに攻撃を行った場合のダメージ量をシミュレーションできます。',
      image: { url: `${BASE_PATH}/Poogle.png` },
      links: [
        {
          text: '紹介ページ',
          url: 'https://applion.jp/android/app/jp.gr.java_conf.sjn.app.poogle/'
        },
        {
          text: 'Play Store（停止中）',
          url: 'https://play.google.com/store/apps/details?id=jp.gr.java_conf.sjn.app.poogle'
        }
      ]
    },
    {
      title: 'Runners Go',
      category: 'Webアプリ',
      content: 'Google Fitと連携した生活習慣改善アプリ。\nスマホ片手にランニングやウォーキングをするだけで、その運動量に応じてガチャができ、ランダムにモンスターを獲得できます。',
      image: { url: `${BASE_PATH}/RunnersGo.png`, position: 'top' },
      links: [
        {
          text: 'サービスページ（停止中）',
          url: 'https://runnersgo.web.app/'
        },
        {
          text: 'リポジトリ',
          url: 'https://github.com/sjnyag/RunnersGo'
        }
      ]
    },
  ];
  const libraryCards: Card[] = [
    {
      title: 'AnimationWrapLayout',
      category: 'Android UIコンポーネントライブラリ',
      content: 'サイズの異なる複数の要素を持ったレイアウトに対し、要素を追加した際に、アニメーション付きで自動で折り返すAndroidのUIコンポーネントです。',
      image: { url: `${BASE_PATH}/AnimationWrapLayout.gif`, position: 'top' },
      links: [
        {
          text: 'リポジトリ',
          url: 'https://github.com/sjnyag/AnimationWrapLayout'
        }
      ]
    },
    {
      title: 'ForceAnimateAppBarLayout',
      category: 'Android UIコンポーネントライブラリ',
      content: 'AndroidのAppBarLayoutを強制的にアニメーションさせることができるように拡張したUIコンポーネントです。',
      image: { url: `${BASE_PATH}/ForceAnimateAppBarLayout.gif`, position: 'top' },
      links: [
        {
          text: 'リポジトリ',
          url: 'https://github.com/sjnyag/ForceAnimateAppBarLayout'
        }
      ]
    },
  ];
  const otherCards: Card[] = [
    {
      title: 'スマートホテリング',
      category: 'Webサービス・特許',
      content: '私が発明者名義で「関係性と予定を基にしたコミュニケーション支援情報の通知」に関する特許を取得しており、その特許技術を用いたサービスがリリースされています。\n',
      image: { url: `${BASE_PATH}/JPlat.jpg`, position: 'top' },
      links: [
        {
          text: '特許情報',
          url: 'https://www.j-platpat.inpit.go.jp/c1800/PU/JP-2023-159759/5834C9C0C4F80982CB3FF2823D985C1409EF68523047A18195D78EE1A64E5FCC/11/ja'
        },
        {
          text: 'サービス紹介',
          url: 'https://www.ntt-us.com/news/2022/05/news-200526-01.html'
        }
      ]
    },
  ];
  return (
    <main>
      <Box sx={{ backgroundColor: blueGrey[50], p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>

        <section id="profile" style={{ paddingBottom: 16 }}>
          <Typography align="center" variant="h4" mb={3} sx={{ width: '100%', color: '#757575', alignItems: "center", display: "flex" }}>
            <AccountBoxIcon sx={{ fontSize: 48 }} />プロフィール
          </Typography>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}>
              <Box component="img" sx={{ maxWidth: 256, maxHeight: 256, borderRadius: "100%", p: 2 }} alt="me" src={`${BASE_PATH}/sjnya.jpg`} />
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    {profile.map((row) => (
                      <TableRow
                        key={row.title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell align="left" sx={{ whiteSpace: 'pre-wrap' }}>{row.content}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
            ※ 業務ではWebエンジニアをメインにフロントエンドからバックエンドまで携わってきておりますが、本ポートフォリオでは個人開発のアウトプット（Androidがメイン）を記載します。
          </Typography>
        </section>

        <section id="output" style={{ paddingBottom: 16 }}>
          <Typography align="center" variant="h4" mb={3} sx={{ width: '100%', color: '#757575', alignItems: "center", display: "flex" }}>
            <RssFeedIcon sx={{ fontSize: 48 }} />アウトプット
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {outputCards.map((props, index) => <MediaCard key={index} {...props} />)}
          </Box>
        </section>

        <section id="application" style={{ paddingBottom: 16 }}>
          <Typography align="center" variant="h4" mb={3} sx={{ width: '100%', color: '#757575', alignItems: "center", display: "flex" }}>
            <AppsIcon sx={{ fontSize: 48 }} />アプリ
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {appCards.map((props, index) => <MediaCard key={index} {...props} />)}
          </Box>
        </section>

        <section id="library" style={{ paddingBottom: 16 }}>
          <Typography align="center" variant="h4" mb={3} sx={{ width: '100%', color: '#757575', alignItems: "center", display: "flex" }}>
            <ViewModuleIcon sx={{ fontSize: 48 }} />ライブラリ
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {libraryCards.map((props, index) => <MediaCard key={index} {...props} />)}
          </Box>
        </section>

        <section id="other" style={{ paddingBottom: 16 }}>
          <Typography align="center" variant="h4" mb={3} sx={{ width: '100%', color: '#757575', alignItems: "center", display: "flex" }}>
            <MoreVertIcon sx={{ fontSize: 48 }} />その他
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {otherCards.map((props, index) => <MediaCard key={index} {...props} />)}
          </Box>
        </section>

      </Box>
    </main>
  )
}
